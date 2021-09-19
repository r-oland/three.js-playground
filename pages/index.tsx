// Components==============
import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';
import { pages } from '../Layout/pages';
// =========================

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.s4};
  padding: 3rem;
`;

const Card = styled(motion.div)`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.xs};
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.s4};
  display: grid;
  gap: ${({ theme }) => theme.spacing.s2};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 125px;
  overflow: hidden;

  img {
    background-color: ${({ theme }) => theme.color.gray};
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  p {
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
  }
`;

export default function Home() {
  return (
    <Wrapper>
      {pages.map((page) => (
        <Link href={page.link} key={page.link}>
          <Card
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ scale: 1 }}
          >
            <img src={`/${page.name}.png`} alt={page.name} />
            <p>{page.name}</p>
          </Card>
        </Link>
      ))}
    </Wrapper>
  );
}
