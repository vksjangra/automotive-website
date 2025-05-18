import { useState } from 'react';
import Modal from 'react-modal';
import CreateUser from './CreateUser';
import LoginUser from './LoginUser';

Modal.setAppElement("#root");

const AuthenticationModal = ( { authModalIsOpen, closeAuthModal } ) => {

    const [view, setView] = useState(0);

    return (
        <div>
            <Modal isOpen={authModalIsOpen} onRequestClose={closeAuthModal} contentLabel="Authentication Modal">
                <button className='py-1 px-3 absolute right-4 border-1 border-gray-200 rounded-full hover:cursor-pointer hover:border-blue-500' onClick={closeAuthModal}>X</button>
                {!view ? 
                <div>
                    <LoginUser />
                    <div className='text-center mt-30'>
                        <p>New User?</p>
                        <button className='border-gray-200 px-3 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 cursor-pointer' onClick={()=>setView(view=>!view)}>Create Account</button>
                    </div>
                </div>
                :
                <div>
                    <CreateUser />
                    <div className='text-center mt-20'>
                        <p>
                            Already Signed Up?
                        </p>
                        <button className='border-gray-200 px-3 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 cursor-pointer' onClick={()=>setView(view=>!view)}>Login Here</button>
                    </div>
                </div>
                    }

            </Modal>
        </div>
    );
};


export default AuthenticationModal;