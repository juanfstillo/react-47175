import React from 'react';

export const Footer = () => {
    return (
    <footer className="bg-dark text-white text-center py-3">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} Solo Deportes.</p>
              </div>
            </div>
          </div>
        </footer>
      );
    };
