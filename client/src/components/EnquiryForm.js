import React from "react";
import "../styles/enquiryForm.css";

const EnquiryForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="left-image"></div>
                <div className="form-content">
                    <button className="close-button" onClick={onClose}>×</button>
                    <h2 className="form-title">Enquiry Now</h2>
                    <form>
                        <div className="form-group">
                            <label>Name*</label>
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email*</label>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <label>Phone*</label>
                            <input type="tel" placeholder="Your Phone number" required />
                        </div>
                        <div className="form-group">
                            <label>State*</label>
                            <select required>
                                <option value="">Your State</option>
                                <option value="state1">State 1</option>
                                <option value="state2">State 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>City*</label>
                            <input type="text" placeholder="Your City" required />
                        </div>
                        <div className="form-group">
                            <label>Celebration*</label>
                            <select required>
                                <option value="">Your Celebration</option>
                                <option value="celebration1">Celebration 1</option>
                                <option value="celebration2">Celebration 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Services*</label>
                            <select required>
                                <option value="">Choose Services</option>
                                <option value="service1">Service 1</option>
                                <option value="service2">Service 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Celebration Date*</label>
                            <input type="date" required />
                        </div>
                        <div className="form-group">
                            <label>Price Range*</label>
                            <select required>
                                <option value="">Select Price Range</option>
                                <option value="range1">Range 1</option>
                                <option value="range2">Range 2</option>
                            </select>
                        </div>
                        <div className="form-group-full">
                            <label>Your Requirements</label>
                            <textarea placeholder="Your Requirements"></textarea>
                        </div>
                        <div className="form-group-full">
                            <label>Submit Your Event Ideas</label>
                            <input type="file" />
                            <small>Supported Formats: png, jpg, jpeg, .doc, .docx, .pdf | Size: Up to 5 Mb</small>
                        </div>
                        <div className="form-group-full">
                            <input type="checkbox" required />
                            <label>I have read and accept the terms and conditions</label>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EnquiryForm;
