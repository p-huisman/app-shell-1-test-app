import { html, render } from "lit";

import type { LifeCycleFn } from "single-spa";

import "./components/app";

type CustomAppProps = {
  navigationBaseUrl: string;
};

type MicroFrontendLifecycleFn = LifeCycleFn<CustomAppProps>;

function getMountPoint(appName: string) {
  return document.getElementById(`single-spa-application:${appName}`);
}

// The actual single-spa lifecycle callbacks.

export const bootstrap: MicroFrontendLifecycleFn = (args) => {
  // console.log("Bootstrap test-app", args);
  return Promise.resolve();
};

export const mount: MicroFrontendLifecycleFn = async (args) => {
  // console.log("Mount test-app", args);
  const mountPoint = getMountPoint(args.name);
  if (mountPoint) {
    render(html`<test-app></test-app>`, mountPoint);
  }
};

export const unmount: MicroFrontendLifecycleFn = async (arg) => {
  // console.log("Unmount test-app", arg.name);
  const mountPoint = getMountPoint(arg.name);
  if (mountPoint) {
    mountPoint.replaceChildren();
  }
};

export const update: MicroFrontendLifecycleFn = async (arg) => {
  console.log("Update test-app", arg);
}
