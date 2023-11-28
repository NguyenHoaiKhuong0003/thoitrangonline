import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION</h2>
        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15667.254276219519!2d106.614994!3d10.9774403!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1701185388636!5m2!1sen!2s" width="1150" height="600" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;
