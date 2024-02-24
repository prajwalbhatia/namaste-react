const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </>
    );
  };
};

export default withPromotedLabel;
