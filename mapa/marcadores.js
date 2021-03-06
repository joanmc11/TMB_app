import { useContext, useEffect, useState } from 'react'
import { getAllBusStops } from '../api';

export const MARKERS_DATA2 = [];

const Markers = () => {
    const [markersData, setMarkersData] = useState([]);

    const loadBusStops = async () => {
        const allBusStops = await getAllBusStops();

        setMarkersData(allBusStops);

    }

    useEffect(() => {
        loadBusStops();

    }, []);

   MARKERS_DATA2 = markersData.map((markers, index) => {
        [{
            id: index,
            latitude: markers.geometry.coordinates[0],
            longitude: markers.geometry.coordinates[1],
            color: '#2F3136',
            name: markers.properites.NOM_PARADA,
            direction: markers.properites.NOM_VIA,
        }]




    });

}



export const MARKERS_DATA =


    [
        {
            id: '1',
            latitude: 41.3997999,
            longitude: 2.1909796,
            color: '#2F3136',
            name: 'Reboot Studio',
            direction: 'Carrer de Pujades, 100',

        },
        {
            id: '2',
            latitude: 41.3995445,
            longitude: 2.1915268,
            color: '#A3EAD8',
            name: 'Cravy',
            direction: 'Carrer de Pujades, 101',

        },
        {
            id: '3',
            latitude: 41.4009999,
            longitude: 2.1919999,
            color: '#E990BB',
            name: 'Dribbble',
            direction: 'Carrer de Pujades, 102',

        },
        {
            id: '4',
            latitude: 41.4001999,
            longitude: 2.1900096,
            color: '#EFD080',
            name: 'Basecamp',
            direction: 'Carrer de Pujades, 103',

        },
        {
            id: '5',
            latitude: 41.40009,
            longitude: 2.1909796,
            color: '#98AFE9',
            name: 'Discord',
            direction: 'Carrer de Pujades, 104',

        },
        {
            id: '6',
            latitude: 41.4009999,
            longitude: 2.1909796,
            color: '#4E87EB',
            name: '1 Password',
            direction: 'Carrer de Pujades, 105',

        },
    ];