let styles = {
  FTdiv: "flex flex-col",
};

const Footer = () => {
  return (
    <footer>
      {/* FT main */}
      <div className={styles.FTdiv}>
        {/* FT div 1 */}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          amet!
        </div>
        {/* FT div 2 */}
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          ducimus.
        </div>
        {/* FT div 3 */}
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, eos.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
