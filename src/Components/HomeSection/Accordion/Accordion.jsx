import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import classes from "./Accordion.module.css";

export default function Example() {
  return (
    <Accordion>
      <div className={classes.main}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3>Short Term Age 14 - 17 Duration: 4years</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Attend and play varsity high school golf at The Taft School,
              Watertown, CT
            </p>
            <p>
              * Compete in local & international golf tournaments in USA and
              outside USA
            </p>
            <p>
              * Participate in collegiate summer camps to play in golf
              tournaments and meet college coaches in preparation for college
              golf recruitment drive
            </p>
            <p>* Break into WAGR ( World Amateur Golf Ranking)</p>
            <p>
              * Represent Nigeria in golf tournaments like The R&A Junior Golf
              championship and All Africa Junior Golf Competitions
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3>Mid Term Age 18 - 21 Duration: 4years</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              * Attend a top D1 college in the US on a golf scholarship to play
              collegiate golf while pursuing my studies in Engineering
            </p>
            <p>*Compete and participate in NCCA D1 Women golf tournaments</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3>Long Term Age 21 - 24 Duration: 4years</h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Participate in LPGA (Ladies Professional Golf Association)
              Q-school events as an amateur
            </p>
            <p>
              * Participate in women golf professional qualifier events like
              USGA women golf open
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </div>
    </Accordion>
  );
}
