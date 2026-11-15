import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address 2</label>
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Province</label>
            <select name="province" value={formData.province} onChange={handleChange} required>
              <option value="">Choose...</option>
              {[
                'Alberta', 'British Columbia', 'Manitoba',
                'New Brunswick', 'Newfoundland and Labrador',
                'Nova Scotia', 'Ontario', 'Prince Edward Island',
                'Quebec', 'Saskatchewan'
              ].map((province) => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
          </div>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
            Agree Terms &amp; Condition?
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="result">
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.name}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          {submittedData.address2 && <p><strong>Address 2:</strong> {submittedData.address2}</p>}
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
