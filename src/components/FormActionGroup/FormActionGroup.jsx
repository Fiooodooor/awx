import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from '@lingui/react';
import { t } from '@lingui/macro';
import {
  ActionGroup,
  Toolbar,
  ToolbarGroup,
  Button
} from '@patternfly/react-core';
import './styles.scss';

const formActionGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const buttonGroupStyle = {
  marginRight: '20px'
};

const FormActionGroup = ({ onSubmit, submitDisabled, onCancel, i18n }) => (
  <ActionGroup style={formActionGroupStyle}>
    <Toolbar>
      <ToolbarGroup style={buttonGroupStyle}>
        <Button aria-label={i18n._(t`Save`)} variant="primary" type="submit" onClick={onSubmit} isDisabled={submitDisabled}>{i18n._(t`Save`)}</Button>
      </ToolbarGroup>
      <ToolbarGroup>
        <Button aria-label={i18n._(t`Cancel`)} variant="secondary" type="button" onClick={onCancel}>{i18n._(t`Cancel`)}</Button>
      </ToolbarGroup>
    </Toolbar>
  </ActionGroup>
);

FormActionGroup.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitDisabled: PropTypes.bool,
};

FormActionGroup.defaultProps = {
  submitDisabled: false,
};

export default withI18n()(FormActionGroup);
