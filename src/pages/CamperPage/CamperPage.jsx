import { Suspense, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCamperById } from '../../redux/vehicles/operation';
import { Container } from '../../components/assets/Container/Container';
import { CamperDetails } from '../../components/CamperDetails/CamperDetails';
import Section from '../../components/assets/Section/Section';
import styles from './CamperPage.module.css';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <main className={styles}>
      <Section css="details">
        <Container>
          <CamperDetails />
        </Container>
      </Section>
      <Section css="detailsInfo">
        <Container>
          {/* <VehicleNavigation />
          <div className={styles.detailsForm} ref={reviewRef}> */}
          <Suspense>
            <Outlet />
          </Suspense>
          {/* <BookingForm /> */}
          {/* </div> */}
        </Container>
      </Section>
    </main>
  );
};

export default CamperPage;
