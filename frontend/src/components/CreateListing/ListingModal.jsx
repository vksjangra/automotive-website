import Modal from 'react-modal';
import CreateListing from './CreateListing';

Modal.setAppElement("#root");

const ListingModal = ( { listingModalIsOpen, closeListingModal } ) => {
  return (
    <div>
        <Modal isOpen={listingModalIsOpen} onRequestClose={closeListingModal} contentLabel="Listing Modal">
            <button className='close py-1 px-3 absolute right-4 border-1 border-gray-200 rounded-full hover:cursor-pointer hover:border-blue-500' onClick={closeListingModal}>X</button>
            <CreateListing />
        </Modal>          
    </div>
  );
};

export default ListingModal;