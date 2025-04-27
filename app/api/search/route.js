import { searchWalmartProducts } from '../../../utils/walmartApi';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('q') || 'spaghetti'; // default to spaghetti if nothing passed

  try {
    const products = await searchWalmartProducts(keyword);

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Walmart API error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch Walmart products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
