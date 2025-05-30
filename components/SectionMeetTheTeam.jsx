// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicSectionMeetTheTeam } from "./plasmic/halcyon_updated_site/PlasmicSectionMeetTheTeam";

function SectionMeetTheTeam_(props, ref) {
  // Use PlasmicSectionMeetTheTeam to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicSectionMeetTheTeam are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all SectionMeetTheTeamProps here, but feel free
  // to do whatever works for you.
  return <PlasmicSectionMeetTheTeam root={{ ref }} {...props} />;
}

const SectionMeetTheTeam = React.forwardRef(SectionMeetTheTeam_);

export default SectionMeetTheTeam;
