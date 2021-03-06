import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import { ICollectionLivre, ICollectionLivrePossede } from "./Iinterface";
import { Don } from "./Components/monetisation/Don";
import { Identite } from "./Components/Identite";
import { Note } from "./Components/Document/Livre/Note";
import { EtatAcces } from "./Components/Autorisation/EtatAcces";
import { EnumAccess, EnumEtatLecture, EnumEtatEcriture } from "./Enumeration";
import { EtatLecture } from "./Components/Document/Livre/EtatLecture";
import { EtatEcriture } from "./Components/Document/Oeuvre/EtatEcriture";
import { CollectionLivre } from "./Components/Document/Livre/CollectionLivre";
import { Divider } from "antd";
import { CollectionLivrePossedePossede } from "./Components/Document/Livre/CollectionLivrePossede";

interface AppProps {}
interface AppState {
  iconFontSize: string;
  collectionLivre1: ICollectionLivre;
  collectionLivre2: ICollectionLivrePossede;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      iconFontSize: "40px",
      collectionLivre1: {
        nom: "collectionlivre1",
        livres: [
          { nom: "livre11", auteur: { nom: "auteur11", pseudo: null } },
          { nom: "livre12", auteur: { nom: "auteur12", pseudo: null } }
        ]
      },
      collectionLivre2: {
        nom: "collectionlivre2",
        etatLecture: EnumEtatLecture.DEBUTE,
        livres: [
          {
            nom: "livre21",
            auteur: { nom: "auteur21", pseudo: null },
            note: 11,
            etatLecture: EnumEtatLecture.NON_OUVERT
          }
        ]
      }
    };
  }

  render() {
    const { collectionLivre1, collectionLivre2, iconFontSize } = this.state;

    return (
      <Fragment>
        <Don don={0} />
        <Divider />
        <Identite nom="frederic" id={1} dateCreation={new Date()} />
        <Divider />
        <Note note={12} />
        <Divider />
        <div className="row">
          <EtatAcces
            etatAcces={EnumAccess.NON_AUTORISE}
            iconFontSize={iconFontSize}
          />
          <EtatAcces
            etatAcces={EnumAccess.AUTORISE_LECTURE}
            iconFontSize={iconFontSize}
          />
          <EtatAcces
            etatAcces={EnumAccess.AUTORISE_ECRITURE}
            iconFontSize={iconFontSize}
          />
        </div>
        <Divider />
        <div className="row">
          <EtatLecture
            etatLecture={EnumEtatLecture.NON_OUVERT}
            iconFontSize={iconFontSize}
          />
          <EtatLecture
            etatLecture={EnumEtatLecture.OUVERT}
            iconFontSize={iconFontSize}
          />
          <EtatLecture
            etatLecture={EnumEtatLecture.DEBUTE}
            iconFontSize={iconFontSize}
          />
          <EtatLecture
            etatLecture={EnumEtatLecture.FINI}
            iconFontSize={iconFontSize}
          />
        </div>
        <Divider />
        <div className="row">
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.STORYBOARD}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.SCENARIO}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.VERSION}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.FINAL}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.ANNULE}
            iconFontSize={iconFontSize}
          />
        </div>
        <Divider />
        <div className="row">
          <CollectionLivre {...collectionLivre1} />
          <CollectionLivrePossedePossede {...collectionLivre2} />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
