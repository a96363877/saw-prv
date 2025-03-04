import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = (props: { show: boolean }) => {
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#42c2f5',
  };

  return (
    <div
      style={{
        display: props.show ? 'flex' : 'none',
        position: 'fixed',
        flexDirection: 'column',
        textAlign: 'center',
        justifyItems: 'center',
        justifyContent: 'center',
        top: '45%',
        bottom: 'auto',
        left: 0,
        right: 0,
        zIndex: 1,
      }}
    >
      <ClipLoader
        color={'#42c2f5'}
        cssOverride={override}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h4 style={{ marginTop: 5, fontWeight: 900, color: '#0062d9cc' }}>
        {' '}
        Please Wait ...{' '}
      </h4>
    </div>
  );
};
