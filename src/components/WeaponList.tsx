
import * as React from 'react';
import weapons, { IWeapon } from "../data/weapons";


class WeaponList extends React.Component {
    public renderStatTable(weapon: IWeapon) {
        return (
            <table>
                <tr>
                    <td><img src={`/images/misc/physical_damage_dark_souls.jpg`} /></td>
                    <td>{weapon.atk.physical}</td>
                    <td><img src={`/images/misc/strength_dark_souls.jpg`} /></td>
                    <td>{weapon.req.strength}</td>
                    <td><img src={`/images/misc/bleed_dark_souls.jpg`} /></td>
                    <td>{weapon.effects.bleed ? weapon.effects.bleed : "-"}</td>
                    <td><img src={`/images/misc/durability_dark_souls.jpg`} /></td>
                    <td>{weapon.durability}</td>
                </tr>
                <tr>
                    <td><img src={`/images/misc/fire_damage_dark_souls.jpg`} /></td>
                    <td>{weapon.atk.fire}</td>
                    <td><img src={`/images/misc/dexterity_dark_souls.jpg`} /></td>
                    <td>{weapon.req.dexterity}</td>
                    <td><img src={`/images/misc/divine_dark_souls.jpg`} /></td>
                    <td>{weapon.effects.divine ? weapon.effects.divine : "-"}</td>
                    <td><img src={`/images/misc/physical_damage_dark_souls.jpg`} /></td>
                    <td>{weapon.weight}</td>
                </tr>
                <tr>
                    <td><img src={`/images/misc/lightning_damage_dark_souls.jpg`} /></td>
                    <td>{weapon.atk.lightning}</td>
                    <td><img src={`/images/misc/intelligence_dark_souls.jpg`} /></td>
                    <td>{weapon.req.intelligence}</td>
                    <td><img src={`/images/misc/occult_dark_souls.jpg`} /></td>
                    <td>{weapon.effects.occult ? weapon.effects.occult : "-"}</td>
                </tr>
                <tr>
                    <td><img src={`/images/misc/magic_damage_dark_souls.jpg`} /></td>
                    <td>{weapon.atk.magic}</td>
                    <td><img src={`/images/misc/faith_dark_souls.jpg`} /></td>
                    <td>{weapon.req.faith}</td>
                    <td><img src={`/images/misc/poison_dark_souls.jpg`} /></td>
                    <td>{weapon.effects.poison ? weapon.effects.poison : "-"}</td>
                </tr>

            </table>
        );
    }

    public render() {
        console.log(weapons);
        const weaponElements = weapons.map((weapon, i) => {
            const imageName = weapon.name.toLocaleLowerCase().replace(/ /g, "_").replace(/'/g, "");
            return (
                <div style={{ width: "300px", height: "150px", color: "#eee", backgroundColor: "#010101", margin: "5px", display: "flex", alignItems: "center" }} key={i}>
                    <img src={`/images/weapons/${imageName}.png`} />
                    <div>

                        {weapon.name}
                        {this.renderStatTable(weapon)}
                    </div>
                </div>
            );
        });
        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {weaponElements}
            </div>
        );
    }
}

export default WeaponList;
