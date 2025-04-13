import { useState } from 'react';


export async function getBankAccounts () {
    const [accounts, setAccounts] = useState([]); // Set empty array initially; no user yet
    const [selectedAccount, setSelectedAccount] = useState([]); // For selecting the given account
    const [loading, setLoading] = useState(true); // For displaying some neat UI when loading

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.dev.backpackpay.com/api/v1/mocks/bank-accounts')
                if (!response.ok) {
                    const errorMessage = await response.json();
                    throw new Error(`Error! ${errorMessage}`);
                }
                const jsonResponse = response.json();
                return jsonResponse.data.bank_accounts;
            } catch (error) {
                console.error('Bank accounts not fetched successfully', error.message)
                throw error;
            }
        }
    })
}


