---
sidebar_position: 5
---

# Changelog

All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 2023-12-18

### Added

- Regex support for the execution of user attribute based conditions in Keycloak

### Fixed

- Issue with SAML federated IdP logout.
- Issue where setting "Client Signature Required" to `true` also required `AuthnRequestsSigned` to be `true`
- Issue with the refresh flow involving the scope parameter
- Problem with the auto update schedule task getting stuck
- Ensure execution config is not duplicated when copying a Keycloak authentication flow

## 2023-07-11

### Added

- Support for using `POST` for OIDC RP-Initiated Logout

### Changed

- Enhance login events to include `voPersonID` information

## 2023-05-23

### Added

- Support for synchronising entitlements managed in COmanage Registry with Keycloak

## 2023-03-24

### Added

- New OpenID Provider interface based on Keycloak (issuer "https://aai.openaire.eu/auth/realms/openaire")

## 2023-02-08

### Added

- GitHub authentication
- Support for the following EOSC AAI Federation interoperability guidelines:
  - Express user identifiers as voPersonID (AARC-G026)
  - Express affiliation information as voPersonExternalAffiliation (AARC-G025)
  - Express assurance information according to REFEDS Assurance Framework

### Changed

- New theme: Identity Provider discovery page, user consent screen, user sign up form
- Enabled mail verification during user sign-up (only when no verified email information is provided by the user's identity provider)
- Upgraded SAML IdP/SP Proxy and Group/Role Management component libraries
- Deployed SAML IdP/SP Proxy and Group/Role Management components in high availability
- Extendeded support for attribute assertion encryption algorithms required by academic Identity Providers based on Shibboleth v4

## 2022-05-12

### Changed

- Updated [Acceptable Use Policy](https://www.openaire.eu/infrastructure-acceptable-use-policy)
based on [WISE Baseline AUP](https://wise-community.org/wise-baseline-aup/)

## 2022-05-05

### Changed

- Improved high availability deployment of database 

## 2022-01-31

### Changed

- Improved high availability deployment of OpenID Provider service 

## 2021-04-06

### Changed

- Updated [Data Protection Policy](https://www.openaire.eu/privacy-policy) to
version 2.3
