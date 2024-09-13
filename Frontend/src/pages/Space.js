import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteSpace, fetchSpaces } from '../api/api';
import { DeleteModal, SpaceCard } from '../components';
import './../css/parking.scss';

const Space = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [spaces, setSpaces] = useState([]);
  const time = ['12:00am', '2:00am', '4:00am', '6:00am', '8:00am', '10:00am',
    '12:00pm', '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm'];

  const [searchForm, setSearchForm] = useState({
    city: '',
    price: '',
    date: '',
    time: '',
    availability: false
  });

  const [selectedSpace, setSelectedSpace] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (state?.fromHome) {
      setSearchForm(prev => ({ ...prev, city: state?.city || '' }));
      handleSearch();
    } else {
      const fetchParams = { setSpaces };
      if (user?.type === 'owner') fetchParams.user_id = user?._id;
      if (state?.parking?._id) fetchParams.parking_id = state?.parking?._id;
      fetchSpaces(fetchParams);
    }
  }, [state]);

  const spaceCards = () => {
    return spaces.map((item, index) => (
      <div className='col-md-4' key={index}>
        <SpaceCard
          space={item}
          onBooking={() => navigate('/bookingForm', { state: { space: item } })}
          setSelectedSpace={setSelectedSpace}
          setShowDeleteModal={setShowDeleteModal} />
      </div>
    ));
  };

  const handleSearchForm = ({ key, value }) => {
    setSearchForm({ ...searchForm, [key]: value });
  };

  const handleSearch = () => {
    setSpaces([]);
    const fetchParams = { ...searchForm, setSpaces };
    if (user?.type === 'owner') fetchParams.user_id = user?._id;
    if (state?.parking?._id) fetchParams.parking_id = state?.parking?._id;
    fetchSpaces(fetchParams);
  };

  const handleDeleteSpace = () => {
    deleteSpace({ id: selectedSpace?._id, handleDeleteSpaceSuccess, handleDeleteSpaceFailure });
  };

  const handleDeleteSpaceSuccess = () => {
    handleSearch(); // Refresh the spaces after deletion
    setShowDeleteModal(false);
  };

  const handleDeleteSpaceFailure = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className='container'>
      <h1 className='mt-5'>Search Results</h1>
      <div className='card p-4 mt-5'>
        <div className='row g-3 d-flex align-items-center'>
          <div className='col-md-3'>
            <input type="text" placeholder='City' className='form-control' value={searchForm?.city} onChange={(e) => handleSearchForm({ key: 'city', value: e.target.value })} />
          </div>
          <div className='col-md-3'>
            <input type="date" placeholder='Date' className='form-control' value={searchForm?.date} onChange={(e) => handleSearchForm({ key: 'date', value: e.target.value })} />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={searchForm?.time} onChange={(e) => handleSearchForm({ key: 'time', value: e.target.value })}>
              <option value="">Time</option>
              {time.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-check col-md-3">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked={searchForm?.availability} onChange={(e) => handleSearchForm({ key: 'availability', value: e.target.checked })} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Available
            </label>
          </div>
          <div className='col-md-3'>
            <button type='submit' className='form-control btn btn-primary' onClick={handleSearch}>
              Search
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search ms-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <h4 className='mt-5'>Showing {spaces?.length || '0'} results</h4>

      <div className='row mt-2 g-5'>
        {spaceCards()}
      </div>

      <DeleteModal value={selectedSpace?.name} showModal={showDeleteModal} setShowModal={setShowDeleteModal} onDeleteConfirm={handleDeleteSpace} />
    </div>
  );
};

export default Space;
