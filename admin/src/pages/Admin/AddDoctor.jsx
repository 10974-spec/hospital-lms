import React from 'react'
import { assets } from '../../assets/assets_admin/assets'

const AddDoctor = () => {
    return (
        <form className='m-5 w-full'>
            <p className='mb-3 text-lg font-medium'>Add Doctor</p>
            <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
                <div >
                    <label htmlFor="doc-img">
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id='doc-img' hidden />
                    <p>Upload doctor <br /> picture</p>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Doctor name</p>
                            <input type="text" placeholder='Name' required />
                        </div>
                        <div>
                            <p>Doctor Email</p>
                            <input type="email" placeholder='Email' required />
                        </div>

                        <div>
                            <p>Doctor Password</p>
                            <input type="password" placeholder='Password' required />
                        </div>
                        <div>
                            <p>Experience</p>
                            <select name="" id="">
                                <option value="1 year">1 year</option>
                                <option value="2 year">2 year</option>
                                <option value="3 year">3 year</option>
                                <option value="4 year">4 year</option>
                                <option value="5 year">5 year</option>
                                <option value="6 year">6 year</option>
                                <option value="7 year">7 year</option>
                                <option value="8 year">8 year</option>
                                <option value="9 year">9 year</option>
                                <option value="10 year">10 year</option>
                            </select>
                        </div>
                        <div>
                            <p>Fees</p>
                            <input type="number" placeholder='fees' required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Speciality</p>
                            <select name="" id="">
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                                <option value="Orthopedist">Orthopedist</option>
                            </select>
                        </div>
                        <div>
                            <p>Education</p>
                            <input type="text" placeholder='Education' required />
                        </div>
                        <div>
                            <p>Address </p>
                            <input type="text" placeholder='Address 1' required />
                            <input type="text" placeholder='Address 2' required />
                        </div>
                    </div>
                    <div>
                        <p>About Doctor</p>
                        <textarea placeholder='write about doctor' rows={5} required />
                    </div>
                    <button>Add doctor</button>
                </div>
            </div>
        </form>
    )
}

export default AddDoctor