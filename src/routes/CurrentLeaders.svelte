<script lang="ts">
    import { onMount } from 'svelte';
    import Avatar from "$lib/images/avatar.jpg"; // Adjust path as necessary

    // Define the Leader type if not already defined globally
    interface Leader {
        name: string;
        image: string;
        roles: string[];
    }

    // Placeholder for leaders data, replace with actual import or API call
    const leaders: Leader[] = [
    {
        name: 'Fr. John Chemmanoor (Late)',
        image: '/images/leaders/Fr-John-chemmanoor.jpg',
        roles: ['Patron 1999-2002', 'Chief Patron 2003-2020']
    },
    {
        name: 'Fr. Antony Chemmanoor (Late)',
        image: '/images/leaders/fr-antony-chemmanoor.jpg',
        roles: ['Patron 1999-2000']
    },
    {
        name: 'Fr. John Paul Chemmanoor',
        image: '/images/leaders/john-paul.jpg',
        roles: ['Chief Patron 2020']
    },
    {
        name: 'Major Cherunny Chemmanoor',
        image: '/images/leaders/cherunni.jpg',
        roles: ['Genl. Secretary 1999-2004', 'Patron 2005']
    },
    {
        name: 'Adv. C. P. Jose',
        image: "/images/leaders/Adv-C-P-Jose.jpg",
        roles: ['President 1999-2004', 'Patron 2005']
    },
    {
        name: 'Dr. C. D. Mathews (Late)',
        image: '/images/leaders/c-d-mathew.jpg',
        roles: ['Secretary 1999-2002', 'Vice-President 2003-2004', 'President 2005', 'Patron 2006-2008']
    },
    {
        name: 'Devassy Chemmanoor',
        image: '/images/leaders/devassy.jpg',
        roles: ['Vice-President 1999-2006', 'President 2006-2008', 'Patron 2009']
    },
    {
        name: 'C. L. Joseph Master (Late)',
        image: '/images/leaders/joseph-master.jpg',
        roles: ['Secretary 1999-2004', 'Genl. Secretary 2005-2006', 'Vice-President 2007']
    },
    {
        name: 'C. A. Jose',
        image: '/images/leaders/c-a-jose.jpg',
        roles: ['Treasurer 1999-2004', 'Vice-President 2005-2008', 'President 2009-2011']
    },
    {
        name: 'C. U. Jain',
        image: '/images/leaders/Jain-c-u.jpg',
        roles: ['Treasurer 2005-2008', 'Genl. Secretary 2012-2014', 'Genl. Secretary 2018-2022']
    },
    {
        name: 'C. R. Lazarkutty',
        image: '/images/leaders/c-r-lazerkutty.jpg',
        roles: ['Secretary 2002-2006', 'Genl. Secretary 2007-2008', 'Vice-President 2009-2011', 'Vice-President 2012-2014', 'Vice-President 2014-2016', 'Vice-President 2016-2018', 'President 2018-2022']
    },
    {
        name: 'C. V. Antony (Late)',
        image: '/images/leaders/c-v-antony-2.jpg',
        roles: ['Secretary 1999-2000']
    },
    {
        name: 'C. D. Antony (Late)',
        image: '/images/leaders/c-d-antony.jpg',
        roles: ['Genl. Secretary 2009-2011', 'President 2012-2014']
    },
    {
        name: 'C. R. Jose Master',
        image: '/images/leaders/C-R-Jose_master.jpg',
        roles: ['Vice-President 2006-2008', 'Vice-President 2009-2011', 'Vice-President 2012-2014', 'President 2014-2016']
    },
    {
        name: 'Francis Chemmanoor',
        image: '/images/leaders/francis-chemmanoor.jpg',
        roles: ['Secretary 2006-2008', 'Secretary 2009-2011', 'Secretary 2012-2014', 'Secretary 2014-2016', 'President 2016-2018']
    },
    {
        name: 'Raphael C. G',
        image: '/images/leaders/Raphael-c-j.jpg',
        roles: ['Treasurer 2009-2011', 'Secretary 2006-2008', 'Secretary 2016-2018', 'Secretary 2018-2022', 'Genl. Secretary 2022-2024']
    },
    {
        name: 'C. T. Antony',
        image: '/images/leaders/C-T-Antony.jpg',
        roles: ['Secretary 2009-2011', 'Secretary 2012-2014', 'Genl. Secretary 2014-2016', 'Secretary 2018-2022', 'Secretary 2022-2024']
    },
    {
        name: 'C. T. Sebastian',
        image: '/images/leaders/c-t-sebastian.jpg',
        roles: ['Secretary 2009-2011', 'Secretary 2012-2014', 'Treasurer 2014-2016']
    },
    {
        name: 'Sony Jose',
        image: '/images/leaders/sony-jose.jpg',
        roles: ['Treasurer 2012-2014', 'Genl. Secretary 2016-2018', 'Vice-President 2018-2022', 'President 2022-2024']
    },
    {
        name: 'Vijo Varghese',
        image: '/images/leaders/vijo-varghese.jpg',
        roles: ['Vice-President 2014-2016', 'Treasurer 2016-2018', 'Vice-President 2018-2022', 'Secretary 2022-2024']
    },
    {
        name: 'James C. K',
        image: '/images/leaders/james-c-k.jpg',
        roles: ['Secretary 2014-2016', 'Secretary 2016-2018', 'Secretary 2018-2022']
    },
    {
        name: 'C. T. Jose (Late)',
        image: '/images/leaders/C-T-Jose.jpg',
        roles: ['Secretary 2014-2016']
    },
    {
        name: 'Nixon C. F',
        image: '/images/leaders/Nixon-c-f.jpg',
        roles: ['Vice-President 2016-2018', 'Treasurer 2018-2022', 'Treasurer 2022-2024']
    },
    {
        name: 'C. T. Babu',
        image: '/images/leaders/C-T-Babu.jpg',
        roles: ['Secretary 2016-2018']
    },
    {
        name: 'C. V. Antony',
        image: '/images/leaders/C-V-Antony.jpg',
        roles: ['Vice-President 2022-2024']
    },
    {
        name: 'C. J. Jose',
        image: '/images/leaders/c-j-jose.jpeg',
        roles: ['Vice-President 2022-2024']
    },
    {
        name: 'John Jose Chemmanoor',
        image: '/images/leaders/John-2.jpg',
        roles: ['Secretary 2022-2024']
    }
]; // Populate this array with actual leader data
const rolePriority: { [key: string]: number } = {
    'President': 1,
    'Genl. Secretary': 2,
    'Treasurer': 3,
    'Secretary': 4,
    'Vice-President': 5
};
    function isCurrentLeader(role: string): boolean {
        const currentYear = new Date().getFullYear();
        const yearPattern = /(\d{4})/g;
        let match;
        let years = [];
        while ((match = yearPattern.exec(role)) !== null) {
            years.push(parseInt(match[1], 10));
        }
        return years.some(year => year >= currentYear);
    }

    let currentLeaders: Leader[] = [];

    onMount(() => {
        currentLeaders = leaders.filter(leader => leader.roles.some(isCurrentLeader));
        // Sort current leaders by the highest priority role they hold
        currentLeaders.sort((a, b) => {
            let highestPriorityA = Math.min(...a.roles.map(role => {
                const roleName = role.split(' ')[0]; // Assuming role names are the first word
                return rolePriority[roleName] || Number.MAX_VALUE;
            }));
            let highestPriorityB = Math.min(...b.roles.map(role => {
                const roleName = role.split(' ')[0];
                return rolePriority[roleName] || Number.MAX_VALUE;
            }));
            return highestPriorityA - highestPriorityB;
        });
    });

    function sortRolesByLatest(roles: string[]): string[] {
        return roles.sort((a, b) => {
            const yearA = a.match(/(\d{4})/);
            const yearB = b.match(/(\d{4})/);
            return yearB ? parseInt(yearB[1], 10) : 0 - (yearA ? parseInt(yearA[1], 10) : 0);
        });
    }
</script>

<div class="container mx-auto px-4">
    {#if currentLeaders.length > 0}
    <h2 class="text-2xl font-bold my-6">Current Leaders</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mb-10">
        {#each currentLeaders as leader}
            <div class="card bg-background shadow-lg rounded-lg w-full overflow-hidden">
                <div class="rounded-full w-32 h-32 mx-auto overflow-hidden mt-4">
                    <img src={leader.image || Avatar} alt={leader.name} class="w-full h-full object-cover">
                </div>
                <div class="p-4 text-center">
                    <h3 class="text-lg text-primary font-bold">{leader.name}</h3>
                    <ul class="mt-2">
                        {#each sortRolesByLatest(leader.roles) as role}
                            <li class="text-sm text-primary-muted">{role}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
    {/if}
</div>