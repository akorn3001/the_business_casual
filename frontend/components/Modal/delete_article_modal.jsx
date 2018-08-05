import React from 'react';
import { connect } from 'react-redux';
import { requestDeleteArticle } from '../../redux/actions/article_actions';
import { hideModal } from '../../redux/actions/modal_actions';
import Modal from './modal';

const DeleteArticleModal = (props) => {
  const { articleID, requestDeleteArticle, hideModal } = props;

  return (
    <Modal
      dangerText={`Are you sure you want to delete this article?`}
      onDangerClick={() => requestDeleteArticle(articleID).then(() => hideModal())}
      onSafetyClick={() => hideModal()}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    requestDeleteArticle: (article_id) => dispatch(requestDeleteArticle(article_id)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(null, mapDispatchToProps)(DeleteArticleModal);
