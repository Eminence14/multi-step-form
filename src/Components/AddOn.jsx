const AddOn = () => {
  return (
    <div>
      <header>
        <h1>Pick add-ons</h1>
      </header>
      <main>
        <p className="description">
          Add-ons help enhance you gaming experience.
        </p>
        <section className="form-container">
          <div className="add-ons">
            <label htmlFor="online-service">
              <input type="checkbox" name="add-on" id="online-service" />
              <div>
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
              </div>
              <div>
                +${}/{}
              </div>
            </label>
            <label htmlFor="larger-storage">
              <input type="checkbox" name="add-on" id="larger-storage" />
              <div>
                <h3>Larger storage</h3>
                <p>Extra 1TB of cloud save</p>
              </div>
              <div>
                +${}/{}
              </div>
            </label>
            <label htmlFor="customizable-profile">
              <input type="checkbox" name="add-on" id="customizable-profile" />
              <div>
                <h3>Customizable profile</h3>
                <p>Custom theme on your profile</p>
              </div>
              <div>
                +${}/{}
              </div>
            </label>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddOn;
