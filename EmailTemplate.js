import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EmailTemplate.css";

const EmailTemplate = () => {
  return (
    <div className="container my-4 p-4 bg-light rounded shadow">
      {/* Header Section */}
      <div className="text-center bg-success text-white py-3 rounded-top">
        <h1 className="fw-bold"><span className="fw-light">Espresso</span>Fuel</h1>
      </div>

      {/* Body Section */}
      <div className="p-4 bg-white rounded-bottom">
        <div className="text-center mb-3">
          <h1 className="fw-bold">Starting Is the Hardest Part!</h1>
        </div>

        <div className="motivational-text">
          <p>You've already done what most people don’t—you started.</p>
          <p>That first push-up? That first workout? It’s a big deal.</p>
          <p>But here’s the truth:</p>
          <p>One push-up won’t change your life, and one workout won’t either.</p>
          <p>What will?</p>
          <p>Showing up again tomorrow. And the day after that.</p>
        </div>

        <button className="btn btn-success w-100 mt-5 py-4 fw-bold big-cta-button">
          Start Training Today!
        </button>
      </div>

      {/* "Here's What You Missed" Section */}
      <div className="p-4 mt-3 bg-success bg-opacity-10 rounded">
        <h2 className="fw-bold text-center mb-4">
          Consistency is where real results happen.
        </h2>
        <h5 className="text-center">Here’s how we’re making that easier for you:</h5>

        <div className="row mt-4 justify-content-center">
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="p-3 bg-white rounded text-center shadow box-one feature-box" style={{ height: "290px" }}>
              <div className="fs-1">💪</div> {/* Icon alone on top */}
              <h4 className="mt-2">Workouts tailored to your goals</h4>
              <p className="text-muted">
                Whether it's your first push-up or your hundredth—we’ve got plans that grow with you.
              </p>
              <button className="btn btn-success mt-3">Learn More</button>
            </div>
          </div>

          {/* Feature 2 (Zigzag different color) */}
          <div className="col-md-4">
            <div className="p-3 bg-success text-white rounded text-center shadow box-two feature-box" style={{ height: "300px" }}>
              <div className="fs-1">⏰</div>
              <h4 className="mt-2">On-demand classes for your schedule</h4>
              <p className="text-white">
                Morning yoga? Late-night HIIT? You decide when and how.
              </p>
              <button className="btn btn-light mt-3">Learn More</button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="p-3 bg-white rounded text-center shadow box-three feature-box" style={{ height: "280px" }}>
              <div className="fs-1">🎓</div>
              <h4 className="mt-2">Guidance from expert coaches</h4>
              <p className="text-muted">
                Got questions? Need advice? We're here to make sure you stay on track.
              </p>
              <button className="btn btn-success mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-secondary bg-opacity-10 text-dark text-center py-3 mt-3 rounded">
        <p>© 2025 Niko Training Club. All rights reserved.</p>
        <p>
          <a href="https://instagram.com/niko.club" className="text-success fw-bold">Instagram</a> | 
          <a href="https://twitter.com/niko.club" className="text-success fw-bold mx-2">Twitter</a> | 
          <a href="https://linkedin.com/in/niko-club" className="text-success fw-bold">LinkedIn</a>
        </p>
        <p><a href="#" className="text-danger fw-bold">Unsubscribe</a></p>
      </div>
    </div>
  );
};

export default EmailTemplate;
