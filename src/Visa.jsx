import { useState } from "react";
import { useNavigate } from "react-router";

export default function Visa({ goToHome }) {
    let [expiryDate, setExpiryDate] = useState("");
    let [cardNumber, setCardNumber] = useState("");
    let navigate = useNavigate();

    // Format input to MM/YYYY
    function formatExpiryDate(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 6);
        }
        setExpiryDate(value);
    }

    // Validate expiry date (Month 1-12, Year 2025+)
    function validateExpiryDate(e) {
        let parts = e.target.value.split('/');

        if (parts.length !== 2) {
            e.target.setCustomValidity("Invalid format. Use MM/YYYY.");
            return;
        }

        let month = parseInt(parts[0], 10);
        let year = parseInt(parts[1], 10);

        let currentYear = new Date().getFullYear();
        let minYear = 2025;

        if (
            isNaN(month) || isNaN(year) ||  // Ensure month/year are numbers
            month < 1 || month > 12 ||      // Month must be 1-12
            year < minYear                  // Year cannot be earlier than 2025
        ) {
            e.target.setCustomValidity("Month must be between 01 and 12. Year cannot be earlier than 2025.");
        } else {
            e.target.setCustomValidity("");  // Clear error if valid
        }
    }

    function validateCCV(input) {
        const value = input.value;

        // Check if the CCV is exactly 3 digits
        if (value.length !== 3 || isNaN(value)) {
            input.setCustomValidity("CCV must be exactly 3 digits.");
        } else {
            input.setCustomValidity(""); // Clear error if valid
        }
    }
    // Format input for Card Number (1234 1234 1234 1234)
    function formatCardNumber(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        let formattedValue = "";

        // Insert space after every 4 digits
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += " ";
            }
            formattedValue += value[i];
        }

        setCardNumber(formattedValue);
    }

    return (
        <section style={{ width: '80%', margin: 'auto', padding: '20px 0 10px 0' }}>
            <h2>Enter your Payment information</h2>
            <p>Complete your Purchase by providing your payment information</p>
            <form className="g-3 p-4 needs-validation" style={{ textAlign: 'left' }} novalidate>
                <div className='mb-4'>
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        placeholder='1234 1234 1234 1234'
                        required
                        maxLength="19" // Allow up to 19 characters (4 groups of 4 digits with spaces)
                        value={cardNumber}
                        onInput={formatCardNumber}
                    />
                    <div className="invalid-feedback">
                        Please provide a valid card number (e.g., 1234 1234 1234 1234).
                    </div>
                </div>
                <div class="row mb-4 ">
                    <div className="col-md-6">
                        <label for="validationCustom01" class="form-label">First name</label>
                        <input type="text" class="form-control" id="validationCustom01" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationCustom02" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="validationCustom02" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6">
                        <label htmlFor="validationCustom03" className="form-label">CCV</label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            maxLength="3"  // Restrict to 3 characters
                            required
                            onBlur={(e) => validateCCV(e.target)}  // Validate CCV on blur
                        />
                        <div className="invalid-feedback">
                            Please provide a valid CCV (3 digits).
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                        <input
                            type="text"
                            className="form-control"
                            id="expiryDate"
                            placeholder="MM/YYYY"
                            maxLength="7"
                            required
                            value={expiryDate}
                            onInput={formatExpiryDate}
                            onBlur={validateExpiryDate}
                        />
                        <div className="invalid-feedback">
                            Please provide a valid expiry date (MM/YYYY). Month must be between 01 and 12, and the year cannot be earlier than 2025.
                        </div>
                    </div>
                </div>
                <div class="col-12 mb-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button onClick={() => goToHome(navigate)} class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </section >
    )
}