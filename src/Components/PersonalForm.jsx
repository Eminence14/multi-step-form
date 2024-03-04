const PersonalForm = () => {
  return (
    <div>
      <header>
        <h1>Personal Info</h1>
      </header>
      <main>
        <p className="description">
          Please provide your name, email address and phone number
        </p>
        <section className="form-container">
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              required
              autoFocus
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              required
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalForm;
