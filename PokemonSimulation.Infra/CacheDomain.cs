using System;
using Microsoft.Extensions.Caching.Memory;

namespace PokemonSimulation.Infra
{
    public class CacheDomain
    {
        public MemoryCache Cache { get; set; }

        public MemoryCacheEntryOptions Options { get; set; }

        public CacheDomain()
        {
            Cache = new MemoryCache(new MemoryCacheOptions
            {
                SizeLimit = 1024
            });

            Options = new MemoryCacheEntryOptions()
                .SetSize(1)
                .SetSlidingExpiration(TimeSpan.FromDays(1));
        }

        public void Set(string key, object obj) 
        {
            Cache.Set(key, obj, Options);
        }
    }
}