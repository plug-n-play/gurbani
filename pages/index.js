import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import shabadsList from '../utils/list'

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        {
          shabadsList.map( (shabad, key) => (
            <div className='row' key={key}>
              <a className='card' href={shabad.completeShabadURL} target="_blank">
                <h3>{shabad.title.unicode}</h3>
                <p>{shabad.title.transliteration}</p>
              </a>
              <div className="shabad-link-wrapper">
                {
                  shabad.keertans.map( (keertan, key) => (
                    <div key={key}>
                      <a className="keertan-link"  href={keertan.url} target="_blank">
                        {keertan.name} - {keertan.duration}
                      </a>
                      <br />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card, .shabad-link-wrapper {
          padding: 18px 18px 24px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
          width: 450px;
          text-align: center;
          margin-right: 20px;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .shabad-link-wrapper {

        }
        .shabad-link {
          text-decoration: underline;
          color: #067df7;
          font-weight: bold;
          width: 550px;
        }
        .keertan-link{
          margin-bottom: 5px;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default Home
