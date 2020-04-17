import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Breadcrumb, Row, Col, Button, Spin, Alert } from 'antd';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { INTERIOR_DESIGN_SLUGS } from '../../constants/route';
import fetcher from '../../helpers/fetcher';

class Architecture extends Component {
  state = {
    architectures: this.props.architectures || [],
    paging: this.props.paging ||  { page: 1, page_size: 3 },
    isLoading: false,
  };

  _loadData = async () => {
    const newData = await fetcher.get('architectures', { data: this.state.paging });

    setTimeout(() => {
      this.setState({
        architectures: this.state.architectures.concat(newData),
        isLoading: false,
      });
    }, 1000)

  }

  loadMore = async () => {
    this.setState({
      isLoading: true,
      paging: {
        ...this.state.paging,
        page: this.state.paging.page + 1,
      },
    }, () => this._loadData());
  }

  render() {
    return (
      <Fragment>
        <section>
          <Breadcrumb>
            <Breadcrumb.Item key="home">
              <Link href="/"><a>Trang chủ</a></Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item key="architecture">
              <Link href="/architecture"><a>Kiến trúc</a></Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <main style={{ marginTop: 20 }}>
          <Row style={{ margin: '0 -10px' }}>
            {this.state.architectures.map(item => (
              <Col key={item.id} xl={8} lg={12} md={24} style={{ padding: '0 10px', marginBottom: 20 }}>
                <Card
                  image={item.avatar.url}
                  title={item.title}
                  linkTo={`/architecture/${item.slug}`}
                />
              </Col>
            ))}
          </Row>
        </main>
        {this.state.architectures.length < this.props.total &&
          <section className="center">
            <Button loading={this.state.isLoading} onClick={this.loadMore}>Xem thêm</Button>
          </section>
        }
      </Fragment>
    );
  }
}

Architecture.getInitialProps = () => {
  const paging = {
    page: 1,
    per_page: 3,
  };

  return Promise.all([
    fetcher.get('architectures/count'),
    fetcher.get('architectures', { data: paging }),
  ]).then(([total, architectures]) => {
    return {
      total,
      paging,
      architectures,
    };
  });
}

export default Architecture;