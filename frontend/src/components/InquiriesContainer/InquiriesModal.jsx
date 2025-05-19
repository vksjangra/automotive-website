// import Modal from 'react-modal';
// import InquiriesContainer from './InquiriesContainer';

// Modal.setAppElement("#root");

// const InquiriesModal = ( { inquiriesModalIsOpen, closeInquiriesModal } ) => {

//   return (
//     <div>
//         <Modal isOpen={inquiriesModalIsOpen} onRequestClose={closeInquiriesModal} contentLabel="Listing Modal">
//             <button className='py-1 px-3 absolute right-4 border-1 border-gray-200 rounded-full hover:cursor-pointer hover:border-blue-500' onClick={closeInquiriesModal}>X</button>
//             <InquiriesContainer />
//         </Modal>          
//     </div>
//   );
// };

// export default InquiriesModal;


import Modal from 'react-modal';
import InquiriesContainer from './InquiriesContainer';

Modal.setAppElement("#root");

const InquiriesModal = ({ inquiriesModalIsOpen, closeInquiriesModal }) => {
    return (
        <Modal
            isOpen={inquiriesModalIsOpen}
            onRequestClose={closeInquiriesModal}
            contentLabel="Listing Modal"
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '90vh', // enables scroll
                    overflow: 'auto',
                },
            }}
        >
            <button
                className='py-1 px-3 absolute right-4 border border-gray-300 rounded-full hover:cursor-pointer hover:border-blue-500'
                onClick={closeInquiriesModal}
            >
                X
            </button>
            <InquiriesContainer />
        </Modal>
    );
};

export default InquiriesModal;
