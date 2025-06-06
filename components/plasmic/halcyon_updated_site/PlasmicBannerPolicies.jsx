// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q72kFJDPbi6GCvfvYJFAr
// Component: oNYs1kJmnTzr
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantswN0X0O3Pyupg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wN0X0o3PYUPG/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: q72kFJDPbi6GCvfvYJFAr/projectcss
import sty from "./PlasmicBannerPolicies.module.css"; // plasmic-import: oNYs1kJmnTzr/css

createPlasmicElementProxy;

export const PlasmicBannerPolicies__VariantProps = new Array(
  "privacyPolicy",
  "unnamedVariant2"
);

export const PlasmicBannerPolicies__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBannerPolicies__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "privacyPolicy",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.privacyPolicy
      },
      {
        path: "unnamedVariant2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.unnamedVariant2
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswN0X0O3Pyupg()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootprivacyPolicy]: hasVariant(
            $state,
            "privacyPolicy",
            "privacyPolicy"
          ),
          [sty.rootunnamedVariant2]: hasVariant(
            $state,
            "unnamedVariant2",
            "unnamedVariant2"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"pageBanner"}
        data-plasmic-override={overrides.pageBanner}
        className={classNames(projectcss.all, sty.pageBanner)}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox___9KfJ7, {
            [sty.freeBoxprivacyPolicy___9KfJ7JiGwe]: hasVariant(
              $state,
              "privacyPolicy",
              "privacyPolicy"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.freeBox__wq78)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img, {
                [sty.imgprivacyPolicy]: hasVariant(
                  $state,
                  "privacyPolicy",
                  "privacyPolicy"
                )
              })}
              displayHeight={"auto"}
              displayMaxHeight={"500px"}
              displayMaxWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "100%"
              }
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "lazy"
                  : "lazy"
              }
              src={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? {
                      src: "/plasmic/halcyon_updated_site/images/image8.jpg",
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/halcyon_updated_site/images/halcyonAngleViewJpg.jpg",
                      fullWidth: 3840,
                      fullHeight: 2160,
                      aspectRatio: undefined
                    }
              }
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dUueq, {
                [sty.freeBoxprivacyPolicy__dUueqjiGwe]: hasVariant(
                  $state,
                  "privacyPolicy",
                  "privacyPolicy"
                )
              })}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1,
                  {
                    [sty.h1privacyPolicy]: hasVariant(
                      $state,
                      "privacyPolicy",
                      "privacyPolicy"
                    ),
                    [sty.h1unnamedVariant2]: hasVariant(
                      $state,
                      "unnamedVariant2",
                      "unnamedVariant2"
                    )
                  }
                )}
              >
                {hasVariant($state, "unnamedVariant2", "unnamedVariant2")
                  ? "Terms of Service"
                  : hasVariant($state, "privacyPolicy", "privacyPolicy")
                  ? "Privacy Policy"
                  : "Cookies Policy"}
              </h1>
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text,
                  {
                    [sty.textprivacyPolicy]: hasVariant(
                      $state,
                      "privacyPolicy",
                      "privacyPolicy"
                    ),
                    [sty.textunnamedVariant2]: hasVariant(
                      $state,
                      "unnamedVariant2",
                      "unnamedVariant2"
                    )
                  }
                )}
              >
                {hasVariant($state, "unnamedVariant2", "unnamedVariant2")
                  ? "Below are our terms of service, last updated 03/01/2024"
                  : hasVariant($state, "privacyPolicy", "privacyPolicy")
                  ? "Below is our privacy policy, last updated 03/01/2024"
                  : "Below is our cookies policy, last updated 03/01/2024"}
              </div>
            </Stack__>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "pageBanner", "img", "h1", "text"],
  pageBanner: ["pageBanner", "img", "h1", "text"],
  img: ["img"],
  h1: ["h1"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBannerPolicies__ArgProps,
          internalVariantPropNames: PlasmicBannerPolicies__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBannerPolicies__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBannerPolicies";
  } else {
    func.displayName = `PlasmicBannerPolicies.${nodeName}`;
  }
  return func;
}

export const PlasmicBannerPolicies = Object.assign(
  // Top-level PlasmicBannerPolicies renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageBanner: makeNodeComponent("pageBanner"),
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicBannerPolicies
    internalVariantProps: PlasmicBannerPolicies__VariantProps,
    internalArgProps: PlasmicBannerPolicies__ArgProps
  }
);

export default PlasmicBannerPolicies;
/* prettier-ignore-end */
