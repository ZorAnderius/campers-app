import { Suspense, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCamperById } from '../../redux/vehicles/operation';
import { Container } from '../../components/assets/Container/Container';
import { CamperDetails } from '../../components/CamperDetails/CamperDetails';
import Section from '../../components/assets/Section/Section';
import styles from './CamperPage.module.css';
import { CamperDetailsNavigation } from '../../components/CamperDetailsNavigation/CamperDetailsNavigation';

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
          <CamperDetailsNavigation />
          <div className={styles['details-form']}>
            <Suspense>
              <Outlet />
            </Suspense>
            {/* <BookingForm /> */}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default CamperPage;
