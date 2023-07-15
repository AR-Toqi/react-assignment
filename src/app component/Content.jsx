import { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById('textarea').value;
    setDisplayText(textAreaValue);
  };

  return (
    <section className="mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="mb-3">
              <button className="btn btn-info" onClick={handleButtonClick}>
                Display Text
              </button>
            </div>
            <div className="mb-3">
              <textarea
                id="textarea"
                className="form-control"
                rows="14"
                placeholder="Enter your text here..."
              ></textarea>
            </div>
            {displayText && (
              <div className="mb-6">
                <p className="alert alert-success">{displayText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

