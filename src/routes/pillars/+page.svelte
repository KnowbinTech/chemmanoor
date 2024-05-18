<script lang="ts">
    import type { PageData } from './$types';
    import  Avatar  from "$lib/images/avatar.jpg"
    import CpJose from "$lib/images/leaders/Adv-C-P-Jose.jpg"
    
    export let data: PageData;

    interface Leader {
        name: string;
        image: string;
        roles: string[];
    }

    const leaders: Leader[] = [
    {
        name: 'Fr. John Chemmanoor (Late)',
        image: '/images/leaders/Fr-John-chemmanoor.jpg',
        roles: ['Patron 1999-2002', 'Chief Patron 2003-2020']
    },
    {
        name: 'Fr. Antony Chemmanoor (Late)',
        image: '/images/leaders/Fr-Antony-Chemmanoor.jpg',
        roles: ['Patron 1999-2000']
    },
    {
        name: 'Fr. John Paul Chemmanoor',
        image: '/images/leaders/Fr-John-Paul-Chemmanoor.jpg',
        roles: ['Chief Patron 2020']
    },
    {
        name: 'Major Cherunny Chemmanoor',
        image: '/images/leaders/Major-Cherunny-Chemmanoor.jpg',
        roles: ['Genl. Secretary 1999-2004', 'Patron 2005']
    },
    {
        name: 'Adv. C. P. Jose',
        image: "/images/leaders/Adv-C-P-Jose.jpg",
        roles: ['President 1999-2004', 'Patron 2005']
    },
    {
        name: 'Dr. C. D. Mathews (Late)',
        image: '/images/leaders/Dr-C-D-Mathews.jpg',
        roles: ['Secretary 1999-2002', 'Vice-President 2003-2004', 'President 2005', 'Patron 2006-2008']
    },
    {
        name: 'Devassy Chemmanoor',
        image: '/images/leaders/Devassy-Chemmanoor.jpg',
        roles: ['Vice-President 1999-2006', 'President 2006-2008', 'Patron 2009']
    },
    {
        name: 'C. L. Joseph Master (Late)',
        image: '/images/leaders/C-L-Joseph-Master.jpg',
        roles: ['Secretary 1999-2004', 'Genl. Secretary 2005-2006', 'Vice-President 2007']
    },
    {
        name: 'C. A. Jose',
        image: '/images/leaders/C-A-Jose.jpg',
        roles: ['Treasurer 1999-2004', 'Vice-President 2005-2008', 'President 2009-2011']
    },
    {
        name: 'C. U. Jain',
        image: '/images/leaders/C-U-Jain.jpg',
        roles: ['Treasurer 2005-2008', 'Genl. Secretary 2012-2014', 'Genl. Secretary 2018-2022']
    },
    {
        name: 'C. R. Lazarkutty',
        image: '/images/leaders/C-R-Lazarkutty.jpg',
        roles: ['Secretary 2002-2006', 'Genl. Secretary 2007-2008', 'Vice-President 2009-2011', 'Vice-President 2012-2014', 'Vice-President 2014-2016', 'Vice-President 2016-2018', 'President 2018-2022']
    },
    {
        name: 'C. V. Antony (Late)',
        image: '/images/leaders/C-V-Antony.jpg',
        roles: ['Secretary 1999-2000']
    },
    {
        name: 'C. D. Antony (Late)',
        image: '/images/leaders/C-D-Antony.jpg',
        roles: ['Genl. Secretary 2009-2011', 'President 2012-2014']
    },
    {
        name: 'C. R. Jose Master',
        image: '/images/leaders/C-R-Jose_master.jpg',
        roles: ['Vice-President 2006-2008', 'Vice-President 2009-2011', 'Vice-President 2012-2014', 'President 2014-2016']
    },
    {
        name: 'Francis Chemmanoor',
        image: '/images/leaders/Francis-Chemmanoor.jpg',
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
        image: '/images/leaders/C-T-Sebastian.jpg',
        roles: ['Secretary 2009-2011', 'Secretary 2012-2014', 'Treasurer 2014-2016']
    },
    {
        name: 'Sony Jose',
        image: '/images/leaders/Sony-Jose.jpg',
        roles: ['Treasurer 2012-2014', 'Genl. Secretary 2016-2018', 'Vice-President 2018-2022', 'President 2022-2024']
    },
    {
        name: 'Vijo Varghese',
        image: '/images/leaders/Vijo-Varghese.jpg',
        roles: ['Vice-President 2014-2016', 'Treasurer 2016-2018', 'Vice-President 2018-2022', 'Secretary 2022-2024']
    },
    {
        name: 'James C. K',
        image: '/images/leaders/James-C-K.jpg',
        roles: ['Secretary 2014-2016', 'Secretary 2016-2018', 'Secretary 2018-2022']
    },
    {
        name: 'C. T. Jose (Late)',
        image: 'images/Leaders/C-T-Jose.jpg',
        roles: ['Secretary 2014-2016']
    },
    {
        name: 'Nixon C. F',
        image: 'images/Leaders/Nixon-C-F.jpg',
        roles: ['Vice-President 2016-2018', 'Treasurer 2018-2022', 'Treasurer 2022-2024']
    },
    {
        name: 'C. T. Babu',
        image: 'images/Leaders/C-T-Babu.jpg',
        roles: ['Secretary 2016-2018']
    },
    {
        name: 'C. V. Antony',
        image: 'images/Leaders/C-V-Antony-2022.jpg',
        roles: ['Vice-President 2022-2024']
    },
    {
        name: 'C. J. Jose',
        image: 'images/Leaders/C-J-Jose.jpg',
        roles: ['Vice-President 2022-2024']
    },
    {
        name: 'John Jose Chemmanoor',
        image: 'images/Leaders/John-Jose-Chemmanoor.jpg',
        roles: ['Secretary 2022-2024']
    }
];

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

    const currentLeaders = leaders.filter(leader => leader.roles.some(isCurrentLeader));
    const previousLeaders = leaders.filter(leader => !leader.roles.some(isCurrentLeader));

    // Sort current leaders by the latest role they hold
    currentLeaders.sort((a, b) => {
        let lastRoleA = a.roles[a.roles.length - 1];
        let lastRoleB = b.roles[b.roles.length - 1];
        return lastRoleA.localeCompare(lastRoleB);
    });

    // Sort previous leaders by the number of roles they've held
    previousLeaders.sort((a, b) => b.roles.length - a.roles.length);
    
</script>

<div class="container mx-auto px-4">
    {#if currentLeaders.length > 0}
        <h2 class="text-2xl font-bold my-6">Current Leaders</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mb-10">
            {#each currentLeaders as leader}
                <div class="card bg-white shadow-lg rounded-lg w-full overflow-hidden">
                    <div class="rounded-full w-32 h-32 mx-auto overflow-hidden mt-4">
                        <img src={leader.image || Avatar} alt={leader.name} class="w-full h-full object-cover">
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="text-lg font-bold">{leader.name}</h3>
                        <ul class="mt-2">
                            {#each leader.roles as role}
                                <li class="text-sm text-gray-600">{role}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    {#if previousLeaders.length > 0}
        <h2 class="text-2xl font-bold my-6">Previous Leaders</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {#each previousLeaders as leader}
                <div class="card bg-white shadow-lg rounded-lg w-full overflow-hidden">
                    <div class="rounded-full w-32 h-32 mx-auto overflow-hidden mt-4">
                        <img src={leader.image || Avatar} alt={leader.name} class="w-full h-full object-cover">
                    </div>
                    <div class="p-4 text-center">
                        <h3 class="text-lg font-bold">{leader.name}</h3>
                        <ul class="mt-2">
                            {#each leader.roles as role}
                                <li class="text-sm text-gray-600">{role}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</div>