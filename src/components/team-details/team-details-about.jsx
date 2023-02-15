import React from "react";

const TeamDetailsAbout = () => {
  return (
      <div className="team__details-about">
        <div className="container">
          <div className="team__details-about-border pt-90 pb-65">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div
                  className="team__details-about-content wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <h3 className="team__details-about-title">
                    About moira baxter
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    lobortis arcu enim urna adipiscing <br /> praesent velit
                    viverra sit semper lorem eu cursus vel hendrerit elementum
                    morbi curabitur etiam <br /> nibh justo, lorem aliquet donec
                    sed sit mi dignissim at ante massa mattis.
                  </p>

                  <div className="team__details-about-list pt-10 mb-35">
                    <ol>
                      <li>Neque sodales ut etiam sit amet nisl purus.</li>
                      <li>Adipiscing elit aliquam purus viverra suspendisse</li>
                      <li>Mauris commodo quis imperdiet tincidunt</li>
                      <li>Adipiscing elit ut aliquam purus </li>
                    </ol>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie. Mauris malesuada nisi sit amet augue accumsan
                    tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar,
                    tortor eros facilisis libero, vitae commodo nunc quam et
                    ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TeamDetailsAbout;
