const Plan = () => {
  return (
    <div>
      <header>
        <h1>Select Your Plan</h1>
      </header>
      <main>
        <p className="description">
          You have the option of monthly or yearly billing
        </p>
        <section className="form-container">
          <div className="plans">
            <label htmlFor="arcade" name='plans-pricing'>
                <input type="radio" name="plans-pricing" id="arcade" />
              <img src="" alt="" />
              <div>
                <span className="plan-title">Arcade</span>
                <span className="plan-pricing">
                  ${}/{}
                </span>
              </div>
            </label>
            <label htmlFor="advanced" name='plans-pricing'>
                <input type="radio" name="plans-pricing" id="advanced" />
              <img src="" alt="" />
              <div>
                <span className="plan-title">Advanced</span>
                <span className="plan-pricing">
                  ${}/{}
                </span>
              </div>
            </label>
            <label htmlFor="pro" name='plans-pricing'>
                <input type="radio" name="plans-pricing" id="pro" />
              <img src="" alt="" />
              <div>
                <span className="plan-title">Pro</span>
                <span className="plan-pricing">
                  ${}/{}
                </span>
              </div>
            </label>
          </div>
          <div className="frequency-toggle">
            <span>Monthly</span>
            <div className="toggle"></div>
            <span>Yearly</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Plan;
