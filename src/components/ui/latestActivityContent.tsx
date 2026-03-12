"use client"
import React, { useRef } from "react";
import { Link, Chip, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { motion, useInView } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import activityData from "@/data/activity.json";

interface GitHubCommit {
    sha: string;
    commit: {
        message: string;
        author: {
            name: string;
            date: string;
        };
    };
    html_url: string;
    repository?: {
        name: string;
        full_name: string;
    };
}

export default function LatestActivityContent() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const commits = activityData as GitHubCommit[];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffTime / (1000 * 60));

        if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        return 'just now';
    };

    return (
        <div ref={ref} className="w-full h-fit min-h-[60vh] -mt-16 flex flex-col">
        

            <div className="mb-8 rounded-md border border-default-200 w-fit p-3 overflow-x-auto">
                {mounted ? (
                    <GitHubCalendar
                        username="neillouis3"
                        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                    />
                ) : null}
            </div>

            <Table aria-label="Latest GitHub commits" removeWrapper>
                <TableHeader>
                    <TableColumn>COMMIT</TableColumn>
                    <TableColumn>REPOSITORY</TableColumn>
                    <TableColumn>TIME</TableColumn>
                </TableHeader>
                <TableBody>
                    {commits.map((commit, index) => (
                        <TableRow key={commit.sha}>
                            <TableCell>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <Link 
                                        href={commit.html_url}
                                        isExternal
                                        size="sm"
                                        className="font-medium"
                                    >
                                        {commit.commit.message.split('\n')[0]}
                                    </Link>
                                </motion.div>
                            </TableCell>
                            <TableCell>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: index * 0.1 + 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    {commit.repository && (
                                        <Chip size="sm" variant="flat" color="default">
                                            {commit.repository.name}
                                        </Chip>
                                    )}
                                </motion.div>
                            </TableCell>
                            <TableCell>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ 
                                        duration: 0.3,
                                        delay: index * 0.1 + 0.2,
                                        ease: "easeOut"
                                    }}
                                >
                                    <span className="text-default-400 text-xs">
                                        {formatDate(commit.commit.author.date)}
                                    </span>
                                </motion.div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
