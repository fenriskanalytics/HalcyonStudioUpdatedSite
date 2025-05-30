// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: q72kFJDPbi6GCvfvYJFAr
// Component: O4s2HovUStCB
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: FsgKuOMK6GHf/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: q72kFJDPbi6GCvfvYJFAr/projectcss
import sty from "./PlasmicSectionHomePage.module.css"; // plasmic-import: O4s2HovUStCB/css

createPlasmicElementProxy;

export const PlasmicSectionHomePage__VariantProps = new Array();

export const PlasmicSectionHomePage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSectionHomePage__RenderFunc(props) {
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
        sty.root
      )}
    >
      <section
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(projectcss.all, sty.section)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__fCVg8)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jJIlZ)}
          >
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__oio7B
              )}
            >
              {"Halcyon Studios"}
            </h1>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__lrFcx
              )}
            >
              {"Find Tranquility in Motion"}
            </h1>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ibmQw
              )}
            >
              {"New Memberships Available Including Reformer Pilates"}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__bTuoy)}>
              <Button
                data-plasmic-name={"registrationLinkButton"}
                data-plasmic-override={overrides.registrationLinkButton}
                className={classNames(
                  "__wab_instance",
                  sty.registrationLinkButton
                )}
                color={"green"}
                size={"minimal"}
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sXZaF
                  )}
                >
                  {"See Memberships"}
                </div>
              </Button>
            </div>
          </Stack__>
        </div>
      </section>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "section", "registrationLinkButton"],
  section: ["section", "registrationLinkButton"],
  registrationLinkButton: ["registrationLinkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSectionHomePage__ArgProps,
          internalVariantPropNames: PlasmicSectionHomePage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSectionHomePage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionHomePage";
  } else {
    func.displayName = `PlasmicSectionHomePage.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionHomePage = Object.assign(
  // Top-level PlasmicSectionHomePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    registrationLinkButton: makeNodeComponent("registrationLinkButton"),
    // Metadata about props expected for PlasmicSectionHomePage
    internalVariantProps: PlasmicSectionHomePage__VariantProps,
    internalArgProps: PlasmicSectionHomePage__ArgProps
  }
);

export default PlasmicSectionHomePage;
/* prettier-ignore-end */
