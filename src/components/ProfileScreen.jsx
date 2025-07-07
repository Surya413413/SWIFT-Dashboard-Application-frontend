import React from 'react';
import { ChevronLeft, User } from 'lucide-react';
import '../styles/App.css';

const ProfileScreen = ({ user, onBack }) => {
  if (!user) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p className="loading-text">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-bg">
      <div className="container-wrapper">
        <div className="back-button" onClick={onBack}>
          <ChevronLeft className="icon" />
          Back to Dashboard
        </div>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-circle">
              <User className="avatar-icon" />
            </div>
            <div className="profile-details">
              <h1>{user.name}</h1>
              <p>@{user.username}</p>
            </div>
          </div>

          <div className="profile-body">
            <div className="profile-column">
              <section className="profile-section">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
              </section>

              <section className="profile-section">
                <h3>Company</h3>
                <p><strong>Name:</strong> {user.company.name}</p>
                <p><strong>Catchphrase:</strong> "{user.company.catchPhrase}"</p>
                <p><strong>Business:</strong> {user.company.bs}</p>
              </section>
            </div>

            <div className="profile-column">
              <section className="profile-section">
                <h3>Address</h3>
                <p><strong>Street:</strong> {user.address.street} {user.address.suite}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <p><strong>ZIP:</strong> {user.address.zipcode}</p>
                <p><strong>Coordinates:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
              </section>

              <section className="profile-section">
                <h3>User Details</h3>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Username:</strong> {user.username}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
