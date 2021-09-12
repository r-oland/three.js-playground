// Components==============
import Link from 'next/link';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { pages } from '../Layout/pages';
// =========================

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 3rem;
`;

const Card = styled(animated.div)`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.xs};
  border-radius: 2px;
  padding: ${({ theme }) => theme.spacing.s4};
  display: grid;
  gap: ${({ theme }) => theme.spacing.s2};
  justify-content: center;
  cursor: pointer;

  img {
    height: 75px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

export default function Home() {
  const [{ scale }, set] = useSpring(() => ({ scale: 1 }));

  return (
    <Wrapper>
      {pages.map((page) => (
        <Link href={page.link} key={page.link}>
          <Card
            style={{ scale }}
            onMouseEnter={() => set({ scale: 1.05 })}
            onMouseLeave={() => set({ scale: 1 })}
            onClick={() => set({ scale: 0.97 })}
          >
            <img src={`/${page.name}.png`} alt={page.name} />
            <p>{page.name}</p>
          </Card>
        </Link>
      ))}
    </Wrapper>
  );
}
