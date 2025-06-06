// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q72kFJDPbi6GCvfvYJFAr
// Component: _Tht8caCxNZy
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantswN0X0O3Pyupg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wN0X0o3PYUPG/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: q72kFJDPbi6GCvfvYJFAr/projectcss
import sty from "./PlasmicContainerCookiesPolicy.module.css"; // plasmic-import: _Tht8caCxNZy/css

createPlasmicElementProxy;

export const PlasmicContainerCookiesPolicy__VariantProps = new Array();

export const PlasmicContainerCookiesPolicy__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContainerCookiesPolicy__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswN0X0O3Pyupg()
  });
  return (
    <div
      data-plasmic-name={"containerCookiesPolicy"}
      data-plasmic-override={overrides.containerCookiesPolicy}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.containerCookiesPolicy
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"cookiesPolicy"}
        data-plasmic-override={overrides.cookiesPolicy}
        hasGap={true}
        className={classNames(projectcss.all, sty.cookiesPolicy)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__rootD
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Cookie Policy"
            : "Cookie Policy"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__nSgjO
          )}
        >
          {
            'Welcome to Halcyon Studio\'s Cookie Policy. In this document, we outline how we use cookies and similar tracking technologies when you interact with our website and related services. By accessing or using our website located at www.halcyonstudio.us, or any other websites, pages, features, mobile applications, or technology owned or operated by Halcyon Studio (referred to as "Halcyon Studio," "the Company," "we," "us," or "our"), you agree to the practices described in this Cookie Policy.'
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"whatAreCookies"}
        data-plasmic-override={overrides.whatAreCookies}
        hasGap={true}
        className={classNames(projectcss.all, sty.whatAreCookies)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4___2ShAc
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "What Are Cookies?"
            : "What Are Cookies?"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5Sy8N
          )}
        >
          {
            'Cookies are small pieces of data stored on your device via your web browser. They allow websites or service providers to recognize your browser and capture certain information. We use cookies, as well as embedded scripts, software development kits ("SDKs"), and similar tracking technologies (collectively referred to as "Tracking Technologies"), to enhance your experience with our services and to collect information as you interact with our website.'
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"typesOfCookies"}
        data-plasmic-override={overrides.typesOfCookies}
        hasGap={true}
        className={classNames(projectcss.all, sty.typesOfCookies)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__bKGnq
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Types of Cookies on Our Services"
            : "Types of Cookies on Our Services"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uyKJe
          )}
        >
          {
            "Strictly Necessary Cookies: These cookies are essential for the proper functioning of our services. They enable you to access secure areas and cannot be disabled.\n\nPerformance or Analytic Cookies: These cookies collect information about how you use our services to help us improve and optimize them. You can disable these cookies.\n\nAdvertising or Targeting Cookies: These cookies make advertising messages more relevant to you. They are used to deliver personalized ads based on your interests. You can disable the use of these cookies."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"howWeUseCookies"}
        data-plasmic-override={overrides.howWeUseCookies}
        hasGap={true}
        className={classNames(projectcss.all, sty.howWeUseCookies)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__aaA5Z
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "How We Use Cookies on Our Services"
            : "How We Use Cookies on Our Services"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cpxIo
          )}
        >
          {
            "We use cookies for various purposes, including:\n\nMaking our services function properly and improving them.\nSimplifying the login process by remembering your account username.\nRecognizing you when you return to our services and remembering your preferences.\nCollecting information about your activities to deliver tailored content and advertising.\nProviding a secure browsing experience."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"yourChoices"}
        data-plasmic-override={overrides.yourChoices}
        hasGap={true}
        className={classNames(projectcss.all, sty.yourChoices)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__iajB0
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Your Choices"
            : "Your Choices"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rdWh
          )}
        >
          {
            "Your web browser provides options to manage cookies preferences. You can:\n\nEnable, disable, or delete cookies through your browser settings. Please note that disabling cookies may affect certain features of our services.\nOpt-out of third-party advertising networks and similar entities using advertising cookies.\nAdjust Flash player settings to block Flash Cookies storage.\nOpt-out of interest-based targeting provided by participating ad servers through various platforms such as the Digital Advertising Alliance or the Network Advertising Initiative.\nUtilize browser help pages for setting cookie preferences."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"questionsAndContactInfo"}
        data-plasmic-override={overrides.questionsAndContactInfo}
        hasGap={true}
        className={classNames(projectcss.all, sty.questionsAndContactInfo)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4___1Lp
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Questions & Contact Information"
            : "Questions & Contact Information"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sMwYo
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "If you have any questions or concerns regarding our Cookie Policy, please contact us at admin@halcyonstudio.us."
            : "If you have any questions or concerns regarding our Cookie Policy, please contact us at admin@halcyonstudio.us"}
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"updatesToCookiesPolicy"}
        data-plasmic-override={overrides.updatesToCookiesPolicy}
        hasGap={true}
        className={classNames(projectcss.all, sty.updatesToCookiesPolicy)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4___1ECr9
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Updates to Our Cookie Policy"
            : "Updates to Our Cookie Policy"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__m08BU
          )}
        >
          {
            "We may update this Cookie Policy from time to time. Any material changes will be reflected in the updated policy with an effective date. We encourage you to review this policy periodically for updates.\n\nThank you for reading our Cookie Policy."
          }
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  containerCookiesPolicy: [
    "containerCookiesPolicy",
    "cookiesPolicy",
    "whatAreCookies",
    "typesOfCookies",
    "howWeUseCookies",
    "yourChoices",
    "questionsAndContactInfo",
    "updatesToCookiesPolicy"
  ],

  cookiesPolicy: ["cookiesPolicy"],
  whatAreCookies: ["whatAreCookies"],
  typesOfCookies: ["typesOfCookies"],
  howWeUseCookies: ["howWeUseCookies"],
  yourChoices: ["yourChoices"],
  questionsAndContactInfo: ["questionsAndContactInfo"],
  updatesToCookiesPolicy: ["updatesToCookiesPolicy"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContainerCookiesPolicy__ArgProps,
          internalVariantPropNames: PlasmicContainerCookiesPolicy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContainerCookiesPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "containerCookiesPolicy") {
    func.displayName = "PlasmicContainerCookiesPolicy";
  } else {
    func.displayName = `PlasmicContainerCookiesPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicContainerCookiesPolicy = Object.assign(
  // Top-level PlasmicContainerCookiesPolicy renders the root element
  makeNodeComponent("containerCookiesPolicy"),
  {
    // Helper components rendering sub-elements
    cookiesPolicy: makeNodeComponent("cookiesPolicy"),
    whatAreCookies: makeNodeComponent("whatAreCookies"),
    typesOfCookies: makeNodeComponent("typesOfCookies"),
    howWeUseCookies: makeNodeComponent("howWeUseCookies"),
    yourChoices: makeNodeComponent("yourChoices"),
    questionsAndContactInfo: makeNodeComponent("questionsAndContactInfo"),
    updatesToCookiesPolicy: makeNodeComponent("updatesToCookiesPolicy"),
    // Metadata about props expected for PlasmicContainerCookiesPolicy
    internalVariantProps: PlasmicContainerCookiesPolicy__VariantProps,
    internalArgProps: PlasmicContainerCookiesPolicy__ArgProps
  }
);

export default PlasmicContainerCookiesPolicy;
/* prettier-ignore-end */
