import { FC, SVGProps } from 'react';
import { IconName } from '@/common/types/types';
import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

// Import existing and new icons
import arrowUp from '@/../public/img/icons/arrow-up.svg';
import code from '@/../public/img/icons/code.svg';
import css from '@/../public/img/icons/css.svg';
import externalLink from '@/../public/img/icons/external-link.svg';
import figma from '@/../public/img/icons/figma.svg';
import github from '@/../public/img/icons/github.svg';
import gulp from '@/../public/img/icons/gulp.svg';
import html from '@/../public/img/icons/html.svg';
import js from '@/../public/img/icons/js.svg';
import linkedIn from '@/../public/img/icons/linkedin.svg';
import location from '@/../public/img/icons/location.svg';
import mail from '@/../public/img/icons/mail.svg';
import nextjs from '@/../public/img/icons/nextjs.svg';
import react from '@/../public/img/icons/react.svg';
import rocket from '@/../public/img/icons/rocket.svg';
import sass from '@/../public/img/icons/sass.svg';
import skype from '@/../public/img/icons/skype.svg';
import telegram from '@/../public/img/icons/tg.svg';
import typescript from '@/../public/img/icons/typescript.svg';
import googleMaps from '@/../public/img/icons/google-maps.svg';
import jinja from '@/../public/img/icons/jinja.svg';
import less from '@/../public/img/icons/less.svg';
import linkify from '@/../public/img/icons/linkify.svg';
import rapidApi from '@/../public/img/icons/rapid-api.svg';
import simpleBar from '@/../public/img/icons/simple-bar.svg';
import pusher from '@/../public/img/icons/pusher.svg';
import upstash from '@/../public/img/icons/upstash.svg';
import redis from '@/../public/img/icons/redis.svg';
import tailwindcss from '@/../public/img/icons/tailwindcss.svg';
import greenSock from '@/../public/img/icons/gsap.svg';
import codepen from '@/../public/img/icons/codepen.svg';
import prisma from '@/../public/img/icons/prisma.svg';
import stripe from '@/../public/img/icons/stripe.svg';

// Programming Languages
import python from '@/../public/img/icons/python.svg';
import ccpp from '@/../public/img/icons/c-cpp.svg'; // C/C++
import r from '@/../public/img/icons/r.svg';
import sql from '@/../public/img/icons/sql.svg';
import javascript from '@/../public/img/icons/javascript.svg'; // JavaScript
import java from '@/../public/img/icons/java.svg';

// Frameworks & Platforms
import flask from '@/../public/img/icons/flask.svg';
import django from '@/../public/img/icons/django.svg';
import springBoot from '@/../public/img/icons/spring-boot.svg';
import matlab from '@/../public/img/icons/matlab.svg';
import hibernate from '@/../public/img/icons/hibernate.svg';
import nodejs from '@/../public/img/icons/nodejs.svg';
import streamlit from '@/../public/img/icons/streamlit.svg';
import tensorflow from '@/../public/img/icons/tensorflow.svg';
import pytorch from '@/../public/img/icons/pytorch.svg';

// Databases
import postgresql from '@/../public/img/icons/postgresql.svg';
import mongodb from '@/../public/img/icons/mongodb.svg';
import firebase from '@/../public/img/icons/firebase.svg';
import sqlite from '@/../public/img/icons/sqlite.svg';
import mysql from '@/../public/img/icons/mysql.svg';

// Developer Tools
import git from '@/../public/img/icons/git.svg';
import docker from '@/../public/img/icons/docker.svg';
import kubernetes from '@/../public/img/icons/kubernetes.svg';
import maven from '@/../public/img/icons/maven.svg';
import gradle from '@/../public/img/icons/gradle.svg';

// Libraries & Data Science
import numpy from '@/../public/img/icons/numpy.svg';
import pandas from '@/../public/img/icons/pandas.svg';
import opencv from '@/../public/img/icons/opencv.svg';

// Cloud Platforms
import aws from '@/../public/img/icons/aws.svg';
import gcp from '@/../public/img/icons/gcp.svg';
import azure from '@/../public/img/icons/azure.svg';

// Additional Icons
import graphql from '@/../public/img/icons/graphql.svg';

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  // Existing icons
  arrowUp,
  code,
  css,
  externalLink,
  figma,
  github,
  gulp,
  html,
  js,
  linkedIn,
  location,
  mail,
  nextjs,
  react,
  rocket,
  sass,
  skype,
  telegram,
  typescript,

  // Programming Languages
  python,
  ccpp, // C/C++
  r,
  sql,
  java,

  // Frameworks & Platforms
  flask,
  springBoot,
  matlab,
  hibernate,
  nodejs,
  streamlit,
  tensorflow,
  pytorch,

  // Databases
  postgresql,
  mongodb,
  firebase,
  sqlite,
  mysql,

  // Developer Tools
  git,
  docker,
  kubernetes,
  maven,
  gradle,

  // Libraries & Data Science
  numpy,
  pandas,
  opencv,

  // Cloud Platforms
  aws,
  gcp,
  azure,

  // Additional Icons
  graphql,
  'google-maps': googleMaps,
  jinja,
  less,
  linkify,
  'rapid-api': rapidApi,
  'simple-bar': simpleBar,
  pusher,
  upstash,
  redis,
  tailwindcss,
  'green-sock': greenSock,
  codepen,
  prisma,
  stripe,
  django: django, // Added Django
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
  className?: string;
};

const Icon: FC<Props> = ({ name, size = 24, className, ...rest }) => {
  const SVG = icons[name];
  if (!SVG) return null; // Fallback if icon doesn't exist

  return (
    <SVG
      className={cn(styles.icon, className)}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export { Icon };