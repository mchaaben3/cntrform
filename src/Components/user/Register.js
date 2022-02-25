import React, { Fragment, useState } from 'react'
import { Modal } from 'react-bootstrap';

const Register = (props) => {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

    // const alert = useAlert();
    // const dispatch = useDispatch();

    // const { isAuthenticated, error, loading } = useSelector(state => state.auth);
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', user.name);
        formData.set('email', user.email);
        formData.set('password', user.password);
        formData.set('avatar', avatar);
       
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
      <Modal.Body className="modal-Register text-white p-5">


    <div className="row wrapper">
        
            <form className="shadow-lg p-5" onSubmit={submitHandler} encType='multipart/form-data'>
                <h1 className="mb-3">Register</h1>

                <div className="form-group ">
                    <label htmlFor="email_field">Name</label>
                    <input
                        type="name"
                        id="name_field"
                        className="form-control"
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email_field">Email</label>
                    <input
                        type="email"
                        id="email_field"
                        className="form-control"
                        name='email'
                        value={email}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password_field">Password</label>
                    <input
                        type="password"
                        id="password_field"
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='avatar_upload'>Avatar</label>
                    <div className='d-flex align-items-center'>
                        <div>
                            <figure className='avatar mr-3 item-rtl'>
                                <img
                                    src={avatarPreview}
                                    className='rounded-circle'
                                    alt='Avatar Preview'
                                />
                            </figure>
                        </div>
                        <div className='custom-file'>
                            <input
                                type='file'
                                name='avatar'
                                className='custom-file-input'
                                id='customFile'
                                accept="iamges/*"
                                onChange={onChange}
                            />
                            <label className='custom-file-label' htmlFor='customFile'>
                                Choose Avatar
                            </label>
                        </div>
                    </div>
                </div>

                <button
                    id="register_button"
                    type="submit"
                    className="btn btn-info py-3"
                    // disabled={loading ? true : false}
                >
                    REGISTER
                </button>
            </form>
        </div>

    </Modal.Body>
</Modal>
  )
}

export default Register