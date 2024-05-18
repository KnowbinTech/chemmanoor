<script lang="ts">
	const fellowshipMembers = [
		{
			sn: 1,
			name: 'Late C V ANTONY',
			sakha: 'IV',
			fellowship: 'PLATINUM 2013'
		},
		{
			sn: 2,
			name: 'SRI C R JOSE MASTER',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 3,
			name: 'SRI C P DEVASSY',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 4,
			name: 'SRI C P C LAZAR',
			sakha: 'II',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 5,
			name: 'SRI FRANCIS CHEMMANOOR',
			sakha: 'IX',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 6,
			name: 'SRI C R LAZAR KUTTY',
			sakha: 'II',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 7,
			name: 'SRI C K ANTONY',
			sakha: 'XI',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 8,
			name: 'SRI C K JAMES',
			sakha: 'XI',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 9,
			name: 'REV FR JOHN CHEMMANOOR',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 10,
			name: 'SRI C D ANTONY',
			sakha: 'II',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 11,
			name: 'SRI C A JOSE PAUL',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 12,
			name: 'MAJ CHERUNNY CHEMMANOOR',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 13,
			name: 'SRI C A PAULSON',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 14,
			name: 'ADV C P JOSE',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 15,
			name: 'SRI C A JOSE NEHRUNAGAR',
			sakha: 'VIII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 16,
			name: 'SRI C V ANTONY KAVEED',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 17,
			name: 'SRI DEVASSY CHEMMANOOR',
			sakha: 'IX',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 18,
			name: 'ADV JAISON CHEMMANOOR',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 19,
			name: 'SRI GLENNY CHEMMANOOR',
			sakha: 'IX',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 20,
			name: 'SRI TONY JACOB',
			sakha: 'VIII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 21,
			name: 'SRI C N JAIN',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 22,
			name: 'SRI RAIMON JOSE CHEMMANOOR',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 23,
			name: 'SRI JOHN C R MUMBAI',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 24,
			name: 'SRI JACOB C J KUTTANELLOOR',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 25,
			name: 'SRI C R K LAZAR',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 26,
			name: 'SRI RAPHAEL',
			sakha: 'VII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 27,
			name: 'SRI SUNNY JOSE CHEMMANOOR',
			sakha: 'VIII',
			fellowship: 'GOLDEN 2014'
		},
		{
			sn: 28,
			name: 'SRI C T SEBASTIAN',
			sakha: 'I',
			fellowship: 'GOLDEN 2014'
		}
	];
</script>

<div>
	<div class="max-w-4xl mx-auto">
        <div class="mx-auto max-w-3xl py-10 sm:py-16 md:py-20 lg:py-56">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary sm:text-6xl">Our Fellowship Members</h1>
     </div>
     </div>           
		<div class="px-4 sm:px-6 lg:px-8">
			<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
				<div class="grid grid-cols-6 sm:grid-cols-8 border-b border-gray-300 bg-gray-50">
					<div class="col-span-4 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
						NAME
					</div>
					<div class="sm:col-span-2 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">BRANCH</div>
					<div class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">FELLOWSHIP</div>
				</div>
				<div class="flex flex-col divide-y divide-gray-300 bg-white">
                    {#each fellowshipMembers as member, index (index)}
					<div class="grid grid-cols-6 sm:grid-cols-8">
						<div class="col-span-4 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
							{ member.name}
						</div>
						<div class="sm:col-span-2 whitespace-nowrap px-3 py-4 text-sm text-gray-500">{member.sakha}</div>
						<div class="pwhitespace-nowrap px-3 py-4 text-sm text-gray-500">{ member.fellowship}</div>
					</div>
                    {/each}
				</div>
			</div>
		</div>
	</div>
</div>
