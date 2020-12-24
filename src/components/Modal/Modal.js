import React from 'react';
import ModalE from 'emerald-ui/lib/Modal';
import Button from 'emerald-ui/lib/Button';
import Avatar from 'emerald-ui/lib/Avatar';

export const Modal = ({ toggleModalProp, showProp, data }) => {
  const toggleModal = () => {
    toggleModalProp();
  };

  return (
    <div>
      <ModalE onHide={toggleModal} show={showProp}>
        <ModalE.Header closeButton={true}>
          <ModalE.Title>Profile</ModalE.Title>
        </ModalE.Header>
        <ModalE.Body>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}
          >
            <Avatar className="mr-2" title={data?.firstName[0]} size="lg" />
            <div>
              <h2 className="eui-card-title mb-0 mt-0">{data?.firstName}</h2>
              <h3 className="eui-card-title mt-0 mb-0">
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </h3>
              <h3 className="eui-card-title mt-0 mb-0">
                <a href={`tel:${data?.phone}`}>{data?.phone}</a>
              </h3>
            </div>
          </div>
          <p>{data?.message}</p>
        </ModalE.Body>
        <ModalE.Footer>
          <Button onClick={toggleModal} shape="flat" color="info">
            Cancel
          </Button>
        </ModalE.Footer>
      </ModalE>
    </div>
  );
};
