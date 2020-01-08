import React from 'react';
import { observer } from 'mobx-react';
import Head from 'next/head';

// Parials
import { Header } from 'partials';

// Layout
import { Container, Content, Flex } from 'layout';

// Typography
import { H3, Text } from 'typography';

// Components
import { HTTPDemo } from 'components';

function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <H3 pb='2rem'>Introduction</H3>
          <Flex flexDirection='column'>
            <p>
              This is a demo website, to showcase a nextjs starter kit in
              action.
            </p>
            <p>
              Read more about it in the <a href='/readme'>readme page</a>, or on{' '}
              <a href='https://github.com/ShadOoW/web-starter-kit'>github</a>
            </p>
          </Flex>
          <H3 py='2rem'>Mobx & REST</H3>
          <Flex flexDirection='column'>
            <Text>
              This is a demo to show how to create a <Text bold>mobx</Text>{' '}
              service to retrieve data from a <Text bold>REST Api</Text> and
              generate <Text bold>computed</Text> states based on it.
              <br />
              The last 30 commits of this repository.
            </Text>
            <HTTPDemo />
          </Flex>
        </Content>
      </Container>
    </>
  );
}

HomePage.getInitialProps = async ({ mobxServices }) => {
  await mobxServices.githubService.fetch();
};

export default observer(HomePage);
