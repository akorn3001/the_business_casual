import React from 'react';
import { connect } from 'react-redux';
import { requestUpdateArticle } from '../../redux/actions/article_actions';
import { hideModal } from '../../redux/actions/modal_actions';
import Modal from './modal';

const DeleteArticleModal = (props) => {
  const { articleID, requestUpdateArticle, hideModal } = props;

  return (
    <Modal
      dangerText={`Do you want to save your changes to this article?`}
      onDangerClick={() => requestUpdateArticle(article, article_id)
        .then(() => hideModal())
      .then(() => this.props.history.push('/articles'))}
      onSafetyClick={() => hideModal()}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    requestUpdateArticle: (article, article_id) => dispatch(requestUpdateArticle(article, article_id)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(null, mapDispatchToProps)(DeleteArticleModal);
