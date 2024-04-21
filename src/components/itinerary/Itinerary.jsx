const Itinerary = () => {
  return (
    <div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-2xl font-semibold">
          Day 01 : Departure
        </div>
        <div className="collapse-content">
          <p>
            Arrive Cairo airport, welcome greeting by our representative who
            will assist you and provide tra nsfers to your Hotel in Cairo. (the
            clients will inform us about their arrival time minimum 7 days
            before)
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Day 02 : Adventure Beggins
        </div>
        <div className="collapse-content">
          <p>
            Arrive Cairo airport, welcome greeting by our representative who
            will assist you and provide tra nsfers to your Hotel in Cairo. (the
            clients will inform us about their arrival time minimum 7 days
            before)
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Day 03 : Historical Tour
        </div>
        <div className="collapse-content">
          <p>
            Arrive Cairo airport, welcome greeting by our representative who
            will assist you and provide tra nsfers to your Hotel in Cairo. (the
            clients will inform us about their arrival time minimum 7 days
            before)
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Day 04 : Rest & Tour
        </div>
        <div className="collapse-content">
          <p>
            Please go to the London Eye ticket office to exchange your voucher
            for a ticket. You may be ask ed for identification ({"driver's"}
            license, national identity card or passport). You will receive
            tickets for the next available time slot, but you may request a
            different date or time, subject to availability.
          </p>
          <p>
            The following items are not permitted: alcohol, baseball bats,
            bicycles (including folding ones), explosives For all ticket
            holders, the number of people per capsule may vary.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Day 05 : Return
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
