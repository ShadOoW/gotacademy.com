import React from 'react';
import PropTypes from 'prop-types';
import { isServer } from '../utils/isServer';
import GithubService from './github';

let clientSideServices;

const getServices = (initialData = { github: {} }) => {
  if (isServer) {
    return {
      githubService: new GithubService(initialData.github),
    };
  }
  if (!clientSideServices) {
    clientSideServices = {
      githubService: new GithubService(initialData.github),
    };
  }

  return clientSideServices;
};

const ServiceContext = React.createContext();

const ServiceProvider = ({ value, children }) => (
  <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
);

ServiceProvider.propTypes = {
  value: PropTypes.shape({
    githubService: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const useMobxServices = () => React.useContext(ServiceContext);

export { getServices, ServiceProvider, useMobxServices };
