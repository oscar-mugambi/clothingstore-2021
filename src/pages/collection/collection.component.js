import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state),
});

// export default connect(mapStateToProps)(CollectionPage);
export default connect(mapStateToProps)(CollectionPage);

//ownProps is the parameters of the components we are wrapping in our connect
